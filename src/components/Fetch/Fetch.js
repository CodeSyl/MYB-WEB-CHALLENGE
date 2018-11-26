
import { useState, useEffect } from 'react';
import axios from 'axios';

type Props = {
  path: string,
  children: React.Element
};

const Fetch = (props: Props) => {
  const [isFetching, setIsfetching]: { isLoading: boolean, setIsfetching: any } = useState(true);
  const [hasFailed, setHasFailed]: { hasFailed: boolean, setHasFailed: any } = useState(false);
  const [data, setData]: { data: any, setData: any } = useState(null);

  useEffect(() => {
    if (!data)
      axios.get(props.path).then(res => {
        setIsfetching(false);
        if (!res.data) setHasFailed(true);
        setData(res.data);
      });
  }, [data]);

  return props.children({ isFetching, hasFailed, data });
};

export default Fetch;
