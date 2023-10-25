import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { endPoint } from '../../services/endPoint'
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner"
import './Ebook.scss'

export default function Ebook() {
    const [loading, setLoading] = useState(true)
    const [ebooks, setEbooks] = useState([])
    const [productType, setProductType] = useState("")
    const [subProductType, setSubProductType] = useState("")

    const productTyps = [
        { id: "", name: "All" },
        { id: "digital", name: "digital" },
    ]

    const subProductTypes = [
        { id: "", name: "All" },
        { id: "book", name: "book" },
    ]

    async function getEbooks() {
        setLoading(true)

        try {
            const response = await fetch(`${endPoint}/products?filter[product_type]=${productType}&filter[sub_product_type]=${subProductType}`)
            const { data } = await response.json()
            setEbooks(data)
            console.log(data)
        } catch (error) {
            console.error(error)
        }

        setLoading(false)
    }

    useEffect(() => {
        getEbooks()
    }, [productType, subProductType])

    return (
        <>
            {loading && <LoadingSpinner />}
            <div className='ebook-page'>
                <h1 className="title">E-books</h1>

                <h2 className="sub-title">
                    Product Type
                </h2>
                <ul>
                    {productTyps.map((productTyp) => {
                        return (
                            <li key={productTyp.id}>
                                <button onClick={() => setProductType(productTyp.id)}>{productTyp.name}</button>
                            </li>
                        )
                    })}
                </ul>

                <h2 className="sub-title">
                    Sub Product Type
                </h2>
                <ul>
                    {subProductTypes.map((subProductType) => {
                        return (
                            <li key={subProductType.id}>
                                <button onClick={() => setSubProductType(subProductType.id)}>{subProductType.name}</button>
                            </li>
                        )
                    })}
                </ul>

                <div className="ebook-card">
                    {ebooks.length > 0 ? ebooks?.map((ebook) => {
                        return (
                            <Link key={ebook.id} to={`/ebooks/${ebook.id}`}>
                                {ebook.attributes.name}
                            </Link>
                        )
                    })
                        : <p>No ebooks found</p>
                    }
                </div>
            </div >
        </>
    )
}
