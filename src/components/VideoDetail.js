const VideoDetail = ({ snippet: { title, description }, id: { videoId } }) => {
  return (
    <div
      style={{
        margin: 10,
      }}
    >
      <div
        className="card "
        style={{
          width: "auto",
          border: "1px solid #000",
          padding: 10,
        }}
      >
        <div>
          <iframe
            src={`https://www.youtube.com/embed/${videoId}`}
            title={title}
          />

          <p className="card-text">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default VideoDetail;
