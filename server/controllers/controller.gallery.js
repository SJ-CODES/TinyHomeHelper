



exports.createPost = async (req, res) => {
    const photosURL = req.body.photosURL

    const newPhotos = new Photos(photosURL)

    try {
        await newPhotos.save()

        res.status(201).json(newPhotos)
    } catch (error) {
        res.status(409).json({ message: error.message })
    }
}