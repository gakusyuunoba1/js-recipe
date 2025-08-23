import { useState } from "react"
// importするところ
import "./App.css"

function App() {
  const [cards, setCards] = useState([
    { id: crypto.randomUUID(), text: "仕事" },
    { id: crypto.randomUUID(), text: "プライベート" },
    { id: crypto.randomUUID(), text: "買い物" },
  ])
  const [inputValue, setInputValue] = useState("")
  // 変数・関数を書くところ
  // 「仕事」「プライベート」「買い物」の項目を作成

  const handleAddCard = () => {
    const newCard = { id: crypto.randomUUID(), text: inputValue }
    const newCards = [...cards, newCard]
    setCards(newCards) //新しい入力を可能にする
    setInputValue("") // 入力欄をクリア
  }
  //ボタンを押したときの処理

  return (
    <div>
      <h1>タスク追加画面</h1>

      <input type="text" placeholder="タスク名を入力" value={inputValue} />

      <button onClick={handleAddCard}>追加</button>
    </div>
  )
}
