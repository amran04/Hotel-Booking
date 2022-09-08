const fom = document.querySelector("#form1");
    fom.addEventListener("submit",forme)
    function forme(event){
        event.preventDefault()
        const userName = document.querySelector("#names").value;
        const userEmail = document.querySelector("#emails").value;
        const userMessages = document.querySelector("#messages").value;
        if(userName == ""){
            return alert("please fill in name")
        }else if(userEmail == ""){
           return alert("please enter your Email address")
        }else{
            alert("Thank you" + " " + "," + userName + " " + "logged in succesfully. WELCOME");
        }
        return fom.reset()}
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '2f93aabf73mshd0edf45d774b775p1d92e8jsn5bd0a6cd1d14',
                'X-RapidAPI-Host': 'booking-com.p.rapidapi.com'
            }
        };
        
        fetch('https://booking-com.p.rapidapi.com/v1/metadata/exchange-rates?currency=AED&locale=en-gb', options)
            .then(response => response.json())
            .then(response => console.log(response))
            .catch(err => console.error(err));