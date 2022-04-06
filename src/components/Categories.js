import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkStatus } from '../redux/categories/categories';

function Categories() {
  const dispatch = useDispatch();
  const actualStatus = useSelector((state) => state.categoriesReducer);
  return (
    <>
      <button type="button" onClick={() => dispatch(checkStatus())}>Check Actual Status</button>
      {actualStatus}
    </>
  );
}

export default Categories;
