import { useEffect, useState } from "react"
import { useParams } from "react-router"
import { endPoint } from '../../../services/endPoint'
import LoadingSpinner from "../../../components/LoadingSpinner/LoadingSpinner";
import './EbookDetails.scss'

export default function EbookDetails() {
    const { ebookId } = useParams()
    const [loading, setLoading] = useState(true)
    const [ebookDetails, setEbookDetails] = useState({})
    const [course, setCourse] = useState({})
    const [book, setBook] = useState({})

    async function getEbookDetails() {
        setLoading(true)

        try {
            const response = await fetch(`${endPoint}/products/${ebookId}`)
            const { data } = await response.json()
            setEbookDetails(data)
            data?.attributes?.course && setCourse(data?.attributes?.course)
            data?.attributes?.book && setBook(data?.attributes?.book)
        } catch (error) {
            console.error(error)
        }

        setLoading(false)
    }

    useEffect(() => {
        getEbookDetails()
    }, [ebookId])

    return (
        <>
            {loading && <LoadingSpinner />}
            <div className='ebook-page'>
                <div className="page-header">
                    <i className="fas fa-arrow-left" onClick={() => window.history.back()}></i>
                    <h1 className="title">E-book</h1>
                </div>
                <p className="sub-title">
                    {ebookDetails?.attributes?.name}
                </p>

                {course && (
                    <div className="ebook-details">
                        <div className="ebook-image">
                            {ebookDetails?.attributes?.course?.image_url ?
                                <img src={ebookDetails?.attributes?.course?.image_url} alt={ebookDetails?.attributes?.name} /> : <p>No image</p>
                            }
                        </div>
                        <div className="ebook-description">
                            <p>{ebookDetails?.attributes?.description || 'No description'}</p>
                        </div>
                    </div>
                )}

                {book && (
                    <div className="ebook-details">
                        <div className="ebook-image">
                            {ebookDetails?.attributes?.book?.image_url ?
                                <img src={ebookDetails?.attributes?.book?.image_url} alt={ebookDetails?.attributes?.name} /> : <p>No image</p>
                            }
                        </div>
                        <div className="ebook-description">
                            <p>{ebookDetails?.attributes?.description || 'No description'}</p>
                        </div>
                    </div>
                )}
            </div >
        </>
    )
}
