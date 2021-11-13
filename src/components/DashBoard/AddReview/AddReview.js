import React from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';
const AddReview = () => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        console.log(data);
        axios.post('https://morning-refuge-62244.herokuapp.com/reviews/', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Added successfully');
                    reset();
                }
            })
    }
    return (
        <>
            <div className='add-service pb-5' style={{ height: '50vh' }}>
                <h2 className='text-center p-3 fw-bold text-dark'>Give Us Review</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input {...register("name", { required: true, maxLength: 20 })} placeholder='write name' />
                    <textarea {...register("review")} placeholder='write yours review' />
                    <input {...register("rating")} placeholder='add rating' />
                    <input {...register("img")} placeholder='image url' />
                    <input className='sub' style={{ background: '#161E54' }} type="submit" />
                </form>
            </div>
        </>
    );
};

export default AddReview;