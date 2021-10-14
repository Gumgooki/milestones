import axios from "axios";
const GET_ALL_MILESTONES = "GET_ALL_MILESTONES";

const defaultMilestones = {
  allMilestones: [],
};

const getAllMilestones = (allMilestones) => ({
  type: GET_ALL_MILESTONES,
  payload: allMilestones,
});

export const receiveMilestones = () => async (dispatch) => {
  try {
    const { data } = await axios.get("/api/milestones");
    dispatch(getAllMilestones(data));
  } catch (err) {
    console.log(err);
  }
};

export default function dummyReducer(state = defaultMilestones, action) {
  switch (action.type) {
    case GET_ALL_MILESTONES:
      return { ...state, allMilestones: [...action.payload] };
    default:
      return state;
  }
}
