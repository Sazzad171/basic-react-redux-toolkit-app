import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchLayouts } from './layoutSlice';

const LayoutView = () => {
    // get data from state
    const {
        loading,
        layouts,
        error
    } = useSelector(state => state.layouts);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchLayouts());
    }, [dispatch]);

    return (
        <section>
            <h3>All layouts are here:</h3>
            { loading && <p>Loading....</p> }
            {
                layouts && layouts.map((item, i) => (
                    <div key={i}>
                        <img src={item.banner} alt="layout" width={80} />
                        <p>{item.title}</p>
                    </div>
                ))
            }
            { error && <p>{ error }</p> }
        </section>
    )
}

export default LayoutView;