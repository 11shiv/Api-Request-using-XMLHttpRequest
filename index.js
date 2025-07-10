const requestUrl = 'https://api.github.com/users/hiteshchoudhary'

const xhr = new XMLHttpRequest() ;
xhr.open('GET', requestUrl) ;
// this open method is not called yet 

xhr.onreadystatechange = function(){
    console.log(xhr.readyState) ;

    if( xhr.readyState === 4){
        console.log(this.responseText) ;

        const data = JSON.parse(this.responseText)

        console.log(data.avatar_url)

        const img = document.getElementById('exampleImage')
        console.log(img.src)
        img.src = data.avatar_url

        const text = document.getElementById('exampleText')
        text.textContent = data.login

    }

}

xhr.send()