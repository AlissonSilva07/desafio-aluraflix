export const useVideo = () => {
    const getVideos = async () => {
        const data = await fetch('https://my-json-server.typicode.com/AlissonSilva07/desafio-aluraflix-api/videos')
        const resp = await data.json()
        return resp
    }

    const getVideosById = async () => {
        const data = await fetch('https://my-json-server.typicode.com/AlissonSilva07/desafio-aluraflix-api/videos?id=${id}')
        const resp = await data.json()
        return resp
    }

    const postVideos = async (video) => {
        const data = await fetch(`https://my-json-server.typicode.com/AlissonSilva07/desafio-aluraflix-api/videos`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(video)
        })
        const resp = await data.json()
        return resp
    }


    const deleteVideos = async (id) => {
        const data = await fetch(`https://my-json-server.typicode.com/AlissonSilva07/desafio-aluraflix-api/videos?id=${id}`, {
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json'
            }
        })
        const resp = await data.json()
        return resp
    }

    const putVideos = async (id, video) => {
        const data = await fetch(`https://my-json-server.typicode.com/AlissonSilva07/desafio-aluraflix-api/videos?id=${id}`, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(video)
        })
        const resp = await data.json()
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