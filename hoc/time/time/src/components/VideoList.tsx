import Video, { VideoProp } from "./Video";

interface VideoListProp {
    list: Array<VideoProp>;
  }

export default function VideoList(props: VideoListProp) {
    return props.list.map(item => <Video url={item.url} date={item.date} />);
}