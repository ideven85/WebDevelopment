function getCookie(){
    const data = [
        { name: 'Joe Brown', age: 53, experience: 5 },
        { name: 'Cindy Johnson', age: 44, experience: 5 },
         { name: 'Some Reader', age: 30, experience: 3 }
        ];
        const deleteRequest=indexedDB.deleteDatabase('CookBook');
        deleteRequest.onerror((e)=>{
            console.log('Event error',e);
        });
        const request = indexedDB.open('CookBook',1);

        // upgradeneeded event is fired when a db is opened
// with a version number higher than the currently stored version (in this case none) 
        request.onupgradeneeded=event=>{
            const db = event.target.result;
            const {transaction}=event.target;

            //Create A New Object Store Named Reader

            const objectStore = db.createObjectStore('reader',{
                ketPath: 'id',
                autoIncrement: true
            });
            objectStore.createIndex('experience','experience',{unique:false});
            objectStore.createIndex('name','name',{unique:true});
            transaction.oncomplete = () => {
                console.log('data finished');
            };

            const readerObjectStore=transaction.objectStore('reader');
            data.forEach(value => {
                const req = readerObjectStore.add(value);
                req.onsuccess=() => {
                    console.log('Data Added');
                };


            });

            request.onerror=()=>{
                console.log(error.target.errorCode);
            };

            request.onsuccess = () => {
                console.log('dataStore Created');
            };

            document.onclick = () => {
                const randomNum = (Math.floor(Math.random()*3)+1);
                const dataRequest = db
                .transaction(['reader'])
                .objectStore('reader')
                .get(randomNum);
                dataRequest.onsuccess= () => {
                    console.log(`Name: ${dataRequest.result.name}`);
                };
            };
            


        }
}