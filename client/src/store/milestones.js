import axios from "axios";
const GET_ALL_MILESTONES = "GET_ALL_MILESTONES";

const getAllMilestones = (allMilestones) => ({
  type: GET_ALL_MILESTONES,
  payload: allMilestones,
});

const defaultMilestones = {
  allMilestones: [],
};

export const receiveMilestones = () => {
  return async (dispatch) => {
    try {
      let response = await axios.get("/api/milestones");
      return dispatch(getAllMilestones(response.data));
    } catch (err) {
      console.log(err);
    }
  };
};

export default function allMilestonesReducer(
  state = defaultMilestones,
  action
) {
  switch (action.type) {
    case GET_ALL_MILESTONES:
      console.log("getting milestones");
      return { ...state, allMilestones: [...action.payload] };
    default:
      return state;
  }
}
