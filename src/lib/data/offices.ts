export type Office = {
  id: string;
  name: string;
  address: string;
  phones: string[];
  email: string;
};

export const offices: Office[] = [
  {
    id: "nnewi",
    name: "Corporate Head Office & Factory Complex",
    address: "60-61 Igwe Orizu Road, P.M.B 50132, Nnewi, Anambra State, Nigeria",
    phones: ["046-460665", "046-460894", "046-462890", "09088979984"],
    email: "info@ibetogroup.com",
  },
  {
    id: "lagos",
    name: "Lagos Liaison Office & Storage Terminal",
    address: "4A Adeola Hopewell Street, Victoria Island; Apapa Wharf & Ibru Jetty Complex, Apapa, Lagos State",
    phones: ["09088979984", "07040145526"],
    email: "lagos@ibetogroup.com",
  },
  {
    id: "abuja",
    name: "Abuja Office",
    address: "The Ancestors Court, 1 Odoh Ibeto Close, Off Osun Crescent, Off IBB Way, Maitama, Abuja",
    phones: ["09088979984"],
    email: "abuja@ibetogroup.com",
  },
  {
    id: "ph",
    name: "Port Harcourt Cement Terminal",
    address: "115 Odoh Ibeto Road, Off Reclamation Road, Bundu Ama, Port Harcourt, Rivers State",
    phones: ["08033100000", "09088979984"],
    email: "cement@ibetogroup.com",
  },
];
