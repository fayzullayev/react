import { useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function Index() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [page, setPage] = useState<number>(1);
  const [filter, setFilter] = useState<string>('');

  useEffect(() => {
    query();
  }, [page, filter]);

  function query() {
    const params: any = {};

    if (page > 0) {
      params.page = page;
    }

    if (filter.length > 0) {
      params.filter = filter;
    }

    setSearchParams({ ...params });
  }

  console.log(searchParams.get('page'));
  return (
    <>
      <p id='zero-state'>
        This is a demo for React Router...
        <br />
        Check out
        <a href='https://reactrouter.com'>the docs at reactrouter.com</a>.
      </p>
      <hr />
      <ul>
        <li>
          <a href='?page=1'>1</a>
        </li>
        <li>
          <a href='?page=2'>2</a>
        </li>
        <li>
          <a href='?page=3'>3</a>
        </li>
        <li>
          <a href='?page=4'>4</a>
        </li>
      </ul>
      <hr />
      <ul>
        <li>
          <div onClick={() => setPage(1)}>1</div>
        </li>
        <li>
          <div onClick={() => setPage(2)}>2</div>
        </li>
        <li>
          <div onClick={() => setPage(3)}>3</div>
        </li>
        <li>
          <div onClick={() => setPage(4)}>4</div>
        </li>
      </ul>
      <div onClick={() => setFilter('id')}>by id</div>
      <div onClick={() => setFilter('name')}>by name</div>
      <div onClick={() => setFilter('age')}>by age</div>
      hr
    </>
  );
}
