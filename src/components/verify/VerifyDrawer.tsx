import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Typography from "@mui/material/Typography";

interface VerifyDrawerProps {
  open: boolean;
  onClose: () => void;
  data: {
    number: number;
    supplier: string;
    retailer: string;
    date: string;
    amount: number;
    validationResult: boolean;
    newly: boolean;
  } | null;
}

export default function VerifyDrawer({
  open,
  onClose,
  data,
}: VerifyDrawerProps) {
  const DrawerContent = () => {
    if (!data)
      return <Typography variant="body2">No data available.</Typography>;

    return (
      <Box p={2}>
        <Typography variant="h6">Details</Typography>
        <Typography variant="body1">Number: {data.number}</Typography>
        <Typography variant="body1">Supplier: {data.supplier}</Typography>
        <Typography variant="body1">Retailer: {data.retailer}</Typography>
        <Typography variant="body1">Date: {data.date}</Typography>
        <Typography variant="body1">
          Amount: {data.amount.toLocaleString()}
        </Typography>
        <Typography variant="body1">
          Validation Result: {data.validationResult ? "Valid" : "Invalid"}
        </Typography>
        <Typography variant="body1">
          Newly: {data.newly ? "Yes" : "No"}
        </Typography>
      </Box>
    );
  };

  return (
    <div>
      <Drawer anchor="right" open={open} onClose={onClose}>
        <Box sx={{ width: 250 }} role="presentation" onClick={onClose}>
          {DrawerContent()}
        </Box>
      </Drawer>
    </div>
  );
}
