import * as Y from "yjs";
import { WebsocketProvider } from "y-websocket";
import { TDBinding, TDShape } from "@tldraw/tldraw";
import * as yorkie from "./yorkie-js-sdk";

const VERSION = 1;

// // Create the doc
// export const doc = new Y.Doc();

export const roomID = `whiteboard-journey-with-y-tldraw-${VERSION}`;

// // Create a websocket provider
// export const provider = new WebsocketProvider(
//   "wss://demos.yjs.dev",
//   roomID,
//   doc,
//   {
//     connect: true
//   }
// );

// // Export the provider's awareness API
// export const awareness = provider.awareness;

// export const yShapes: Y.Map<TDShape> = doc.getMap("shapes");
// export const yBindings: Y.Map<TDBinding> = doc.getMap("bindings");

// // Create an undo manager for the shapes and binding maps
// export const undoManager = new Y.UndoManager([yShapes, yBindings]);

// /** Client **/
// // Creating a client
// export const client = new yorkie.Client('http://wbj-vpc-alb-private-152462774.ap-northeast-2.elb.amazonaws.com:8090');

// /** Document **/
// // Creating a document
// export const doc = new yorkie.Document<YorkieType>('testt2');

// /** Doc Type */
// export type YorkieType = {
//   shapes: Record<string, TDShape>
//   bindings: Record<string, TDBinding>
// }