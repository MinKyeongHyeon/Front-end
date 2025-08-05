import CardImg from "./CardImg";
import CardContent from "./CardContent";
function Card() {
  return (
    <div className="w-[350px] p-[25px] box-border rounded-lg border-2 border-gray-200 shadow-lg overflow-hidden bg-white">
      <CardImg />
      <CardContent />
    </div>
  );
}

export default Card;
