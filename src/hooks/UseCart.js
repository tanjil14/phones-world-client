import { useEffect, useState } from "react";
import useFirebase from "./useFirebase";

const UseCart = () => {
    const { user } = useFirebase();
    const { uid } = user;
    console.log(user);
    const [selectedBooking, setSelectedBooking] = useState([]);
    useEffect(() => {
        fetch(`https://hidden-coast-67939.herokuapp.com/cart/${uid}`)
            .then(res => res.json())
            .then(data => {
                if (data.length) {
                    setSelectedBooking(data)
                }
            })
        setSelectedBooking([])
    }, [uid])
    function addToCart(user, dt) {
        const isHave = selectedBooking.find(select => select._id === dt._id);
        delete dt._id;
        dt.uid = uid;
        dt.user = user;
        dt.status = 'pending';
        if (isHave) {
            alert("Already Booked!! Thanks For Booking......")
        } else {
            fetch('https://hidden-coast-67939.herokuapp.com/booking/add', {
                method: "POST",
                headers: { "content-type": "application/json" },
                body: JSON.stringify(dt)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        alert('Added To Cart')
                        const newBooking = [...selectedBooking, dt];
                        setSelectedBooking(newBooking)
                    }
                })
        }
    }
    function remove(id) {
        const isConfirm = window.confirm('Are You Sure? Wanna delete?');
        console.log(isConfirm);
        if (isConfirm) {
            const url = `https://hidden-coast-67939.herokuapp.com/booking/add/${id}`;
            console.log(url);
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount === 1) {
                        alert('remove successfully')
                        const selectAfterRemove = selectedBooking.filter((select) => !(select._id === id));
                        setSelectedBooking(selectAfterRemove)
                    } else {
                        alert('Something Wrong!')
                    }
                })
        }
    }
    return { addToCart, selectedBooking, remove };
};

export default UseCart;