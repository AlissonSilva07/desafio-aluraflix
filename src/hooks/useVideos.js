export const useVideo = () => {
    const getVideos = async () => {
        const data = await fetch('https://my-json-server.typicode.com/AlissonSilva07/desafio-aluraflix-api/videos')
        const resp = await data.json()
        return resp
    }

    const getVideosById = () => {
        const data = fetch('https://my-json-server.typicode.com/AlissonSilva07/desafio-aluraflix-api/videos?id=${id}')
        const resp = data.json()
        return resp
    }

    const postVideos = (video) => {
        const data = fetch(`https://my-json-server.typicode.com/AlissonSilva07/desafio-aluraflix-api/videos`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(video)
        })
        const resp = data.json()
        return resp
    }


    const deleteVideos = (id) => {
        const data = fetch(`https://my-json-server.typicode.com/AlissonSilva07/desafio-aluraflix-api/videos?id=${id}`, {
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json'
            }
        })
        const resp = data.json()
        return resp
    }

    const putVideos = (id, video) => {
        const data = fetch(`https://my-json-server.typicode.com/AlissonSilva07/desafio-aluraflix-api/videos?id=${id}`, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(video)
        })
        const resp = data.json()
        return resp
    }

    return {
        getVideos,
        getVideosById,
        deleteVideos,
        postVideos,
        putVideos
    }
}