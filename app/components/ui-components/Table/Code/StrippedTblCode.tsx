import React from "react";
import CodeModal from "../../CodeModal";

const StrippedTblCode = () => {
  return (
    <div>
      <CodeModal>
        {`
    import { Table } from "flowbite-react";
    
    <div className="overflow-x-auto">
          <Table striped>
            <Table.Head>
              <Table.HeadCell>Product name</Table.HeadCell>
              <Table.HeadCell>Color</Table.HeadCell>
              <Table.HeadCell>Category</Table.HeadCell>
              <Table.HeadCell>Price</Table.HeadCell>
              <Table.HeadCell>
                <span className="sr-only">Edit</span>
              </Table.HeadCell>
            </Table.Head>
            <Table.Body className="divide-y">
              <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  {'Apple MacBook Pro 17"'}
                </Table.Cell>
                <Table.Cell>Sliver</Table.Cell>
                <Table.Cell>Laptop</Table.Cell>
                <Table.Cell>$2999</Table.Cell>
                <Table.Cell>
                  <a
                    href="#"
                    className="font-medium text-primary hover:underline dark:text-primary"
                  >
                    Edit
                  </a>
                </Table.Cell>
              </Table.Row>
              <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  Microsoft Surface Pro
                </Table.Cell>
                <Table.Cell>White</Table.Cell>
                <Table.Cell>Laptop PC</Table.Cell>
                <Table.Cell>$1999</Table.Cell>
                <Table.Cell>
                  <a
                    href="#"
                    className="font-medium text-primary hover:underline dark:text-primary"
                  >
                    Edit
                  </a>
                </Table.Cell>
              </Table.Row>
              <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  Magic Mouse 2
                </Table.Cell>
                <Table.Cell>Black</Table.Cell>
                <Table.Cell>Accessories</Table.Cell>
                <Table.Cell>$99</Table.Cell>
                <Table.Cell>
                  <a
                    href="#"
                    className="font-medium text-primary hover:underline dark:text-primary"
                  >
                    Edit
                  </a>
                </Table.Cell>
              </Table.Row>
              <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  Google Pixel Phone
                </Table.Cell>
                <Table.Cell>Gray</Table.Cell>
                <Table.Cell>Phone</Table.Cell>
                <Table.Cell>$799</Table.Cell>
                <Table.Cell>
                  <a
                    href="#"
                    className="font-medium text-primary hover:underline dark:text-primary"
                  >
                    Edit
                  </a>
                </Table.Cell>
              </Table.Row>
              <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  Apple Watch 5
                </Table.Cell>
                <Table.Cell>Red</Table.Cell>
                <Table.Cell>Wearables</Table.Cell>
                <Table.Cell>$999</Table.Cell>
                <Table.Cell>
                  <a
                    href="#"
                    className="font-medium text-primary hover:underline dark:text-primary"
                  >
                    Edit
                  </a>
                </Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        </div>
                `}
      </CodeModal>
    </div>
  );
};

export default StrippedTblCode;
