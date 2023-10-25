import { useEffect, useState } from "react"
import { useParams } from "react-router"
import { endPoint } from '../../../services/endPoint'
import LoadingSpinner from "../../../components/LoadingSpinner/LoadingSpinner";
import './EbookDetails.scss'

export default function EbookDetails() {
    const { ebookId } = useParams()
    const [loading, setLoading] = useState(true)
    const [ebookDetails, setEbookDetails] = useState({})
    const [course, setCourse] = useState(null)
    const [book, setBook] = useState(null)

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

    console.log(book, course)

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

                <div className="ebook-info">
                    {course && (
                        <div className="course-details">
                            <div className="course-image">
                                {course?.image_url ?
                                    <img src={course?.image_url} alt={course?.name} /> : <p>No image</p>
                                }
                            </div>
                            <div className="course-description">
                                <p>{course?.description || 'No description'}</p>
                            </div>
                        </div>
                    )}

                    {book && (
                        <div className="book-details">
                            <div className="book-image">
                                {book?.image_url ?
                                    <img src={book?.image_url} alt={book?.title} /> : <p>No image</p>
                                }
                            </div>
                            <div className="book-description">
                                <p>{book?.description || 'No description'}</p>
                            </div>
                        </div>
                    )}
                </div >
            </div >
        </>
    )
}
