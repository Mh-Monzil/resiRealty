import broker1 from "../../assets/broker/broker1.jpg";
import broker2 from "../../assets/broker/broker2.jpg";
import broker3 from "../../assets/broker/broker3.jpg";
import broker4 from "../../assets/broker/broker4.jpg";

const Broker = () => {
  return (
    <div className="my-24 text-center max-w-7xl mx-auto">
      <h3 className="text-4xl font-bold">Property Broker</h3>
      <p className="text-xl mt-4 max-w-[700px] mx-auto">
        Property brokers are skilled negotiators and knowledgeable experts in
        real estate, providing strategic advice, detailed insights, and
        trustworthy guidance to clients.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mt-12">
        <div className="space-y-2">
          <img
            className="w-52 h-52 mx-auto rounded-full"
            src={broker1}
            alt=""
          />
          <p className="font-bold text-xl">Jack John</p>
          <p className="font-semibold">Broker</p>
        </div>
        <div className="space-y-2">
          <img
            className="w-52 h-52 mx-auto rounded-full"
            src={broker2}
            alt=""
          />
          <p className="font-bold text-xl">Krista John</p>
          <p className="font-semibold">Broker</p>
        </div>
        <div className="space-y-2">
          <img
            className="w-52 h-52 mx-auto rounded-full"
            src={broker3}
            alt=""
          />
          <p className="font-bold text-xl">Roger Jackson</p>
          <p className="font-semibold">Broker</p>
        </div>
        <div className="space-y-2">
          <img
            className="w-52 h-52 mx-auto rounded-full"
            src={broker4}
            alt=""
          />
          <p className="font-bold text-xl">Johnny David</p>
          <p className="font-semibold">Broker</p>
        </div>
      </div>
    </div>
  );
};

export default Broker;
