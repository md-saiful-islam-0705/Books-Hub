import PropTypes from "prop-types";

const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red", "pink"];

const Chart = ({ data }) => {
  const CustomBar = ({ fill, width, height }) => {
    const path = `M0,${height} C${width / 3},${height} ${width / 2},${
      height / 3
    } ${width / 2},0 C${width / 2},${height / 3} ${
      (2 * width) / 3
    },${height} ${width},${height} Z`;

    return <path d={path} fill={fill} />;
  };

  const barWidth = 100;
  const gap = 10;
  const textOffset = 15;

  return (
    <div className="border shadow-md rounded-md p-4 lg:w-full w-full  overflow-auto ">
      <svg width={800} height="400">
        {data.map((book, index) => (
          <g
            key={book.bookName}
            transform={`translate(${index * (barWidth + gap)},0)`}
          >
            <CustomBar
              fill={colors[index % colors.length]}
              width={barWidth}
              height={400}
            />
            <text
              x={barWidth / 2}
              y="390"
              textAnchor="middle"
              fill="#000"
              fontSize="10px"
            >
              {book.totalPages}
            </text>

            <text
              transform={`translate(${
                barWidth / 2 + textOffset
              }, 200), rotate(-90)`}
              textAnchor="start"
              fill="black"
              fontSize="10px"
            >
              {book.bookName}
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
};

Chart.propTypes = {
  data: PropTypes.array.isRequired,
  fill: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
};

export default Chart;