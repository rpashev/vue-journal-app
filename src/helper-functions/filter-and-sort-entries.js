import dayjs from "dayjs";

export const filterAndSortEntries = (
  entries,
  timeFilter,
  searchQuery,
  startingDate,
  endingDate
) => {
  return entries
    .filter((entry) => {
      const noTagsEntryBody = entry.body.replace(/<\/?[^>]+(>|$)/g, "");

      let currentDate = new Date().toISOString().substr(0, 10);
      let endDate = new Date(entry.date).toISOString().substring(0, 10);
      let today = dayjs(currentDate);
      let entryDate = dayjs(endDate);

      if (
        noTagsEntryBody.toLowerCase().includes(searchQuery.toLowerCase()) ||
        entry.title.toLowerCase().includes(searchQuery.toLowerCase())
      ) {
        if (timeFilter === "alltime") {
          return entry;
        }

        if (timeFilter === "today") {
          if (entryDate.isSame(today)) {
            return entry;
          }
        }
        if (timeFilter === "yesterday") {
          if (entryDate.isSame(today.subtract(1, "day"))) {
            return entry;
          }
        }
        if (timeFilter === "this-week") {
          let diff = today.diff(entryDate, "day");
          if (diff <= 7) {
            return entry;
          }
        }
        if (timeFilter === "this-month") {
          let diff = today.diff(entryDate, "month");
          if (diff <= 1) {
            return entry;
          }
        }
        if (timeFilter === "this-year") {
          let diff = today.diff(entryDate, "year");
          if (diff <= 1) {
            return entry;
          }
        }
        if (timeFilter === "custom") {
          if (startingDate && endingDate) {
            let fromDate = dayjs(startingDate);
            let toDate = dayjs(endingDate);

            if (fromDate < toDate) {
              if (entryDate >= fromDate && entryDate <= toDate) {
                return entry;
              }
            } else if (fromDate > toDate) {
              if (entryDate <= fromDate && entryDate >= toDate) {
                return entry;
              }
            } else if (fromDate.isSame(toDate, "day")) {
              if (entryDate.isSame(fromDate, "day")) {
                return entry;
              }
            }
          }
        }
      }
    })
    .sort((a, b) => new Date(b.date) - new Date(a.date));
};
