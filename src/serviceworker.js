export default function serviceworker(){
    const sUrl=`${process.env.PUBLIC_URL}/sw.js`
    navigator.serviceWorker.register(sUrl)
    .then((response)=>{
        console.log(response);
    })
}