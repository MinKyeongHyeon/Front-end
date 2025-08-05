function CardContent() {
  return (
    <div className="flex flex-col justify-start bg-white p-4 w-full">
      <p className="w-full break-words text-sm leading-relaxed mb-4 text-gray-600 word-break overflow-wrap">
        기가막힌 로또 당첨의 비결과 다음 로또 예측의 원리가 담겨있는 정수. 지금
        바로 구입하세요!
      </p>
      <p className="text-lg font-bold text-gray-800 mb-2">가격 1,000원</p>
      <p className="text-sm text-gray-500 mb-4">재고 20개</p>
      <button
        type="button"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full transition-colors"
      >
        지금 바로 구매하기
      </button>
    </div>
  );
}

export default CardContent;
