
const promise1 = new Promise ((resolve, reject) => {
    setTimeout(function() {
        resolve('Đây là promise1');
    }, 3000);
})
const promise2 = new Promise ((resolve, reject) => {
    setTimeout(function() {
        resolve('Đây là promise2');
    }, 2000);
})
const promise3 = new Promise ((resolve, reject) => {
    setTimeout(function() {
        reject('Lỗi');
    }, 2000);
})



Promise.allSettled([promise1, promise2,promise3])
 .then(data => console.log(data))
 .catch(err => console.log(err))
