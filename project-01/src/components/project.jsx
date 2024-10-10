import { useState } from "react"


const Project = () => {
    const [name, setName] = useState('')
    const [age, setAge] = useState('')
    const [users, setUsers] = useState([])

    return(
        <div>
            <img
                src="public/스크린샷 2024-10-10 오전 1.32.02.png"
                alt="tuna"
            />
            <h1>사용자 정보 입력</h1>
            <p>이름</p>
            <input 
                placeholder="이름을 입력하세요."
            />
            <p>나이</p>
            <input 
                placeholder="나이를 입력하세요."
            />
            <button>사용자 추가</button>

        </div>
    )
}

export default Project