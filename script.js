document.getElementById("button").addEventListener("click", fetching)

async function fetching(){

        var data = await fetch("https://aws.random.cat/meow")

        var data1 = await data.json()

        console.log(data1)

        document.getElementById("image").setAttribute("src", data1.file)

}
fetching()
/*
fetch("https://aws.random.cat/meow")
.then((data)=>data.json())
.then((res)=>console.log(res))
document.getElementById("container")*/