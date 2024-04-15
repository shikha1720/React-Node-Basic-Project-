import React, { useEffect } from 'react';
import "./Home.css";
import HomeItem from '../HomeItem/HomeItem';
import { useDispatch, useSelector } from 'react-redux';
import { itemsAction } from '../../store/itemsSlice';
import { fetchStatusAction } from '../../store/fetchStatusSlice';

function Home() {
    const items = useSelector(store=>store.items);
    const fetchStatus = useSelector(store=>store.fetchStatus);
    const dispatch = useDispatch();

    useEffect(()=>{
      if(fetchStatus.fetchDone) return;

      const controller = new AbortController();
      const signal = controller.signal;

      dispatch(fetchStatusAction.markFetchingStarted());
      
      fetch("http://localhost:7000/items", { signal })
      .then((res)=>res.json())
      .then(({items})=>{
        dispatch(fetchStatusAction.markFetchDone());
        dispatch(fetchStatusAction.markFetchingFinished());
        dispatch(itemsAction.addInitialItems(items));
      })
      .catch(error => { console.log(error)});

      return()=>{
        controller.abort();
      };
    }, [fetchStatus ,dispatch]);

  return (
    <main>
      <div className='items-container'>
        {items.map((item)=> <HomeItem key={item.id} item={item}/>)}  
      </div>
    </main>
  )
}

export default Home
