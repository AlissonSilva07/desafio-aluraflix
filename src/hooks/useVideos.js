export const useVideo = () => {
    const getVideos = async () => {
        const data = await fetch('http://localhost:3000/videos')
        const resp = await data.json()
        return resp
    }

    const getVideosById = async () => {
        const data = await fetch('http://localhost:3000/videos?id=${id}')
        const resp = await data.json()
        return resp
    }

    const generateID = async () => {
        let total;
        await getVideos().then(data => {
            total = data.length
        })
        return total
    }

    const postVideos = async (video) => {
        video.id = generateID()
        const data = await fetch(`http://localhost:3000/videos`, {
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
        const data = await fetch(`http://localhost:3000/videos?id=${id}`, {
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json'
            }
        })
        const resp = await data.json()
        return resp
    }

    const putVideos = async (id, video) => {
        const data = await fetch(`http://localhost:3000/videos?id=${id}`, {
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