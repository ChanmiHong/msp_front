import Head from 'next/head';
import { Box, Container } from '@mui/material';
import { SupportListResults } from '../components/support_case/support-list-results';
import { SupportListToolbar } from '../components/support_case/support-list-toolbar';
import { DashboardLayout } from '../components/dashboard-layout';
import { customers } from '../__mocks__/customers';

const Page = () => (
  <>
    <Head>
      <title>
        Case | Material Kit
      </title>
    </Head>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8
      }}
    >
      <Container maxWidth={false}>
        <SupportListToolbar />
        <Box sx={{ mt: 3 }}>
          <SupportListResults customers={customers} />
        </Box>
      </Container>
    </Box>
  </>
);

Page.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Page;
