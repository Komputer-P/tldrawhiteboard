import * as React from 'react'
import { Tldraw, useFileSystem } from "@tldraw/tldraw";
import { useMultiplayerState } from "./useMultiplayerState";
import "./styles.css";
import { roomID } from "./store";

function Editor({ roomId }: { roomId: string }) {
  const fileSystemEvents = useFileSystem();
  const { onMount, ...events } = useMultiplayerState(roomId);

  return (
    <div>
      <Tldraw
        autofocus
        disableAssets
        showPages={false}
        onMount={onMount}
        {...fileSystemEvents}
        {...events}
      />
    </div>
  );
}

export default function YorkieTldraw(): JSX.Element {
  React.useEffect(() => {
    //const userName = prompt("이름 입력해주세요") as string;
    //localStorage.setItem("userName", userName);
  }, []);
  
  return (
    <div className="tldraw">
      <Editor roomId={roomID} />
    </div>
  );
}
