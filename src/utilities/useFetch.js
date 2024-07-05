import { useEffect, useState } from "react"

export default function useFetch(url) {
  const [data, setData] = useState(null)
  const [pending, setePending] = useState(false)
  const [error, setError] = useState(null)

  async function fetchUrlData(getUrl) {
    try {
      setePending(true)
      const response = await fetch(getUrl)
      const data = await response.json()
      if (data) {
        setData(data)
        setError(null)
        setePending(false)
      }
    } catch (e) {
      setError(e.message)
      setePending(false)
    }
  }

 

  useEffect(() => {
    fetchUrlData(url)
  }, [url])

  return { data, pending, error }
}
