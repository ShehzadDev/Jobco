const Button = (props) => {
  return (
    <div>
      <button className="hover:animate-pulse bg-[#2cb1bc] opacity-80 hover:opacity-100 text-white font-bold py-2 px-4 rounded-3xl">
        {props.text}
      </button>
    </div>
  );
};
export default Button;
