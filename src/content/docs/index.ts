import { DocsExamplesByTag } from "@/types/docs-reference";

import * as mAudio from "./m-audio";
import * as mCharacter from "./m-character";
import * as mCube from "./m-cube";
import * as mCylinder from "./m-cylinder";
import * as mFrame from "./m-frame";
import * as mGroup from "./m-group";
import * as mImage from "./m-image";
import * as mLabel from "./m-label";
import * as mLight from "./m-light";
import * as mModel from "./m-model";
import * as mPlane from "./m-plane";
import * as mPrompt from "./m-prompt";
import * as mSphere from "./m-sphere";
import * as mVideo from "./m-video";

export const examples: DocsExamplesByTag = {
  "m-cube": mCube,
  "m-cylinder": mCylinder,
  "m-sphere": mSphere,
  "m-audio": mAudio,
  "m-video": mVideo,
  "m-plane": mPlane,
  "m-light": mLight,
  "m-model": mModel,
  "m-character": mCharacter,
  "m-group": mGroup,
  "m-label": mLabel,
  "m-frame": mFrame,
  "m-prompt": mPrompt,
  "m-image": mImage,
};
