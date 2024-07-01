export const useVideo = () => {
    const getVideos = async () => {
        const data = await fetch('http://localhost:3000/videos')
        const resp = await data.json()
        return resp
    }

    const getVideosById = async (id) => {
        const data = await fetch(`http://localhost:3000/videos/${id}`)
        const resp = await data.json()
        return resp
    }

    const generateID = async () => {
        let total;
        await getVideos().then(data => {
            total = data.length
        })
        return total + 1
    }

    const postVideo = async (video) => {
        let newId = await generateID()
        video.id = newId.toString() 
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


    const deleteVideo = async (id) => {
        const data = await fetch(`http://localhost:3000/videos/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json'
            }
        })
        const resp = await data.json()
        return resp
    }

    const putVideo = async (id, video) => {
        const data = await fetch(`http://localhost:3000/videos/${id}`, {
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
        deleteVideo,
        postVideo,
        putVideo
    }
}