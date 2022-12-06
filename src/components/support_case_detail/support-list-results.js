import { useState } from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';
import PropTypes from 'prop-types';
import { format } from 'date-fns';
import {
  Box, Button,
  Card,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  Typography
} from '@mui/material';
import { getInitials } from '../../utils/get-initials';

export const SupportListResults = ({ customers, ...rest }) => {
  const [selectedCustomerIds, setSelectedCustomerIds] = useState([]);
  const [limit, setLimit] = useState(3);
  const handleSelectAll = (event) => {
    let newSelectedCustomerIds;

    if (event.target.checked) {
      newSelectedCustomerIds = customers.map((customer) => customer.id);
    } else {
      newSelectedCustomerIds = [];
    }

    setSelectedCustomerIds(newSelectedCustomerIds);
  };

  // const handleSelectOne = (event, id) => {
  //   const selectedIndex = selectedCustomerIds.indexOf(id);
  //   let newSelectedCustomerIds = [];
  //
  //   if (selectedIndex === -1) {
  //     newSelectedCustomerIds = newSelectedCustomerIds.concat(selectedCustomerIds, id);
  //   } else if (selectedIndex === 0) {
  //     newSelectedCustomerIds = newSelectedCustomerIds.concat(selectedCustomerIds.slice(1));
  //   } else if (selectedIndex === selectedCustomerIds.length - 1) {
  //     newSelectedCustomerIds = newSelectedCustomerIds.concat(selectedCustomerIds.slice(0, -1));
  //   } else if (selectedIndex > 0) {
  //     newSelectedCustomerIds = newSelectedCustomerIds.concat(
  //       selectedCustomerIds.slice(0, selectedIndex),
  //       selectedCustomerIds.slice(selectedIndex + 1)
  //     );
  //   }
  //
  //   setSelectedCustomerIds(newSelectedCustomerIds);
  // };

  const handleLimitChange = (event) => {
    setLimit(event.target.value);
  };

  return (
    <Card {...rest}>
      <PerfectScrollbar>
        <Box sx={{ minWidth: 1050 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                  No
                </TableCell>
                <TableCell>
                  Case ID
                </TableCell>
                <TableCell>
                  Title
                </TableCell>
                <TableCell>
                  Question Grade
                </TableCell>
                <TableCell>
                  Grade
                </TableCell>
                <TableCell>
                  Status
                </TableCell>
                <TableCell>
                  Registration Date
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {customers.slice(0, limit).map((customer) => (
                <TableRow
                  hover
                  key={customer.id}
                  selected={selectedCustomerIds.indexOf(customer.id) !== -1}
                >
                  <TableCell>
                    xx
                  </TableCell>
                  <TableCell>
                    <Typography
                      color="textPrimary"
                      variant="body1"
                    >
                      {customer.name}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    {customer.email}
                  </TableCell>
                  <TableCell>
                    {`${customer.address.city}, ${customer.address.state}, ${customer.address.country}`}
                  </TableCell>
                  <TableCell>
                    grade
                  </TableCell>
                  <TableCell>

                  </TableCell>
                  <TableCell>
                    {format(customer.createdAt, 'dd/MM/yyyy')}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
      </PerfectScrollbar>
    </Card>
  );
};

SupportListResults.propTypes = {
  customers: PropTypes.array.isRequired
};
