import { getCanvasDefaultImages } from 'shared/helpers/helpers';
import { getGarment } from "shared/api/dataApi"
import { setInitialState } from 'redux/reducers/modelData';

export const getModelData = async (dispatch: any, id: string) => {
  const updatedModelData: any = {};

    try {
      const res = await getGarment({ garment_id: id });
      for (let key in res.silhouettes) {
        const positions = Object.keys(res.silhouettes[key]);  
        updatedModelData[key] = positions.map((position) =>
          getCanvasDefaultImages(res.silhouettes, key, position)
        );
      }
    } catch (err) {
      console.error(err);
    }        
    dispatch(setInitialState(updatedModelData))
  };
  