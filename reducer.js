export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  //token:
  // "BQCElQBiNAX8XHOFJvdc7X4wcQ-a_ST6-RDsOrFCyIkvZAE5jDdunp0jieC6_atmtyNusjCLuUkMD8qVuUsMO1SgLAd8CGXGrKY_ZC81lXYCfJycsm8qJK_KqX3-r8TRcRHAJGjtTraIMVjCuVzalyTljZWggupGmnd4dgARlcZHhGiI",
};

const reducer = (state, action) => {
  console.log(action);
  //Action -> type, [payload]
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };

    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };

    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };
    default:
      return state;
  }
};

export default reducer;
