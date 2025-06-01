import { useNavigate, useParams } from "react-router-dom";
import ProductForm from "../components/form/ProductForm.component";
import { useEffect } from "react";

export default function AddOrUpdateProduct() {
  const { id: productId } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    if (!productId) {
      navigate("/error");
    }
  }, [productId, navigate]);

  if (!productId) return null;

  return (
    <>
      <ProductForm productId={productId} />
    </>
  );
}
