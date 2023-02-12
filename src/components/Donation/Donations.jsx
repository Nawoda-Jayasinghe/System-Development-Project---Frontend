import React from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { Spinner , Button} from "flowbite-react";
import { useState, useEffect , useRef} from "react";
import axios from "axios";
import Header from "../Dashboard/Header";
import { DocumentIcon } from "@heroicons/react/24/solid";
import { useReactToPrint } from "react-to-print";
import { useSelector } from "react-redux";

const Donations = () => {
  const [searchText, setSearchText] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [donations, setDonations] = useState([]);
  const role = useSelector((state) => state.auth.role);

  useEffect(() => {
    axios.get("http://localhost:3500/donors").then((res) => {
      setIsLoading(false);
      setDonations(res.data.donations);
    });
  }, []);

  useEffect(() => {
    if (donations && searchText.length > 0) {
      setDonations(
        donations.filter((donation) =>
          donation.donorName.toLowerCase().includes(searchText.toLowerCase())
        )
      );
    }

    if (searchText.length === 0) {
      axios.get("http://localhost:3500/donors").then((res) => {
        setDonations(res.data.donations);
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchText]);

  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: "ProjectsList",
    // onAfterPrint:
  });


  return (
    <div className="w-full flex flex-col justify-start items-center h-screen bg-[#F3F4FF]">
      <div className="flex w-11/12 justify-between items-center mt-12">
        <h2 className="font-bold text-4xl leading-10 text-[#303972]">
          Donations
        </h2>
        <Header />
      </div>

      <div className="flex w-11/12 justify-between items-center mt-10">
        <div>
          <div class="flex">
            <span class="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 rounded-l-md border border-r-0 border-gray-300 dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
              <MagnifyingGlassIcon className="h-5 w-5 text-[#A098AE]" />
            </span>
            <input
              type="text"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              class="rounded-none rounded-r-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search..."
            />
          </div>
        </div>
        <div className="flex items-center justify-end space-x-5 w-full">
          {role === "Manager" && (
            <div>
              <Button
                class="text-white bg-login-color hover:bg-[#6760bf] focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-2 py-1 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                pill={true}
                onClick={handlePrint}
              >
                <DocumentIcon className="h-4 w-6" />
              </Button>
            </div>
          )}
        </div>
      </div>

      <div class="overflow-x-auto relative shadow-md sm:rounded-lg w-11/12 h-[60vh] mt-10">
        <table ref={componentRef} class="w-full text-sm text-left text-gray-500 dark:text-gray-400 relative">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr className="bg-login-color sticky top-0">
              <th scope="col" class="p-4">
                <div class="flex items-center">
                  <input
                    id="checkbox-all-search"
                    type="checkbox"
                    class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label for="checkbox-all-search" class="sr-only">
                    checkbox
                  </label>
                </div>
              </th>
              <th scope="col" class="py-3 px-6 text-white">
                User
              </th>
              <th scope="col" class="py-3 px-6 text-white">
                Amount
              </th>
              <th scope="col" class="py-3 px-6 text-white">
                Email
              </th>
              <th scope="col" class="py-3 px-6 text-white">
                Mobile
              </th>
              <th scope="col" class="py-3 px-6 text-white">
                Project
              </th>
            </tr>
          </thead>
          {!isLoading ? (
            <>
              {donations?.length > 0 ? (
                <tbody>
                  {donations.map((donation) => (
                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                      <td class="p-4 w-4">
                        <div class="flex items-center">
                          <input
                            id="checkbox-table-search-3"
                            type="checkbox"
                            class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                          />
                          <label for="checkbox-table-search-3" class="sr-only">
                            checkbox
                          </label>
                        </div>
                      </td>
                      <td
                        scope="row"
                        class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        {donation.donorName}
                      </td>
                      <td class="py-4 px-6">{donation.donationAmount} LKR</td>
                      <td class="py-4 px-6">{donation.email}</td>
                      <td class="py-4 px-6">{donation.mobile}</td>
                      <td class="py-4 px-6">{donation.project.title}</td>
                    </tr>
                  ))}
                </tbody>
              ) : (
                <tbody className="relative">
                  <div className="absolute top-[50px] bottom-0 left-[40%] right-0 m-auto">
                    Sorry there aren't any data
                  </div>
                </tbody>
              )}
            </>
          ) : (
            <tbody className="relative">
              <Spinner
                aria-label="data loading spinner"
                className="fill-login-color absolute top-[50px] bottom-0 left-0 right-0 m-auto"
                size="xl"
              />
            </tbody>
          )}
        </table>
      </div>
    </div>
  );
};

export default Donations;
