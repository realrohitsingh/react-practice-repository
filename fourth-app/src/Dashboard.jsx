import './Dashboard.css'

function Dashboard() {
  let cart = [{
    id: "101",
    name: "Iphone 17",
    image: "https://imgs.search.brave.com/BNNGN5zdMJpN3_ZjPawtztKLzyz5EjstUfSIi5RcFKk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9waG90/b3M1LmFwcGxlaW5z/aWRlci5jb20vZ2Fs/bGVyeS9lbWJlZGFi/bGVzLzQyNS1oZXJv/LnBuZw",
    price: "143000",
  },
  {
    id: "101",
    name: "Camera",
    image: "https://imgs.search.brave.com/-JCw4FwVb9dn9ZDG9JaYFa_ncDZ307GYSYiOX5I86eY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9rYW1l/cmFzdG9yZS5jb20v/Y2RuL3Nob3AvY29s/bGVjdGlvbnMvbWVk/aXVtX2Zvcm1hdF9k/aWdpdGFsX2NhbWVy/YXMuanBnP3Y9MTcy/MzYzMjk4MSZ3aWR0/aD0xNTAw",
    price: "45000",
  },
  {
    id: "101",
    name: "Sofa",
    image: "https://imgs.search.brave.com/M-7Gb9aJ7fxQRj8mmEK0JmUh9HqkxDOSKaJVTkycEgE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tYWlk/ZW5ob21lLmNvbS9j/ZG4vc2hvcC9maWxl/cy9tYXN0ZXItYnJl/dWVyLXNvZmEtMF8y/LjAuanBnP3Y9MTcy/MTc0NTMxMyZ3aWR0/aD0yMDAw",
    price: "15000",
  },
  {
    id: "101",
    name: "Samsung ultra",
    image: "https://imgs.search.brave.com/6pk7966HVlvppfhjDZaQe6crieCaK4qRaA7tLb5MXpM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdG9y/YWdlLmdvb2dsZWFw/aXMuY29tL21oaW1n/L3AvMDg3MC8xMDkw/MDg3MC8zYmMyX3Mu/anBn",
    price: "2500000",
  },]
  return (
    <>
      <h1 style={{textAlign:"center",textDecoration: "underline"}}>Dashboard</h1>
      {cart.map((item) => {
        return (
          <>
            <div className="items">
              <b>ITEM_ID : {item.d}</b>
              <h1>{item.name}</h1>
              <h2>M.R.P {item.price}</h2>
              <img src={item.image} alt="" />
              <hr />
            </div>
          </>
        )
      })}
    </>
  )
}

export default Dashboard