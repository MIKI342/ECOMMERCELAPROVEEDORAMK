import React, { useContext, useMemo, useCallback } from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { ProductContext } from 'context/Context';
import useGroupedByCategory from 'hooks/useGroupedByCategory';
import CategoryCard from 'components/home/CategoryCard';
import 'components/home/componentsHome/css/CategoryGroup.css'; // Archivo CSS para estilos

const CategoryGroup = () => {
  // Obtener los productos y estado de carga desde el contexto
  const { products, loading } = useContext(ProductContext);
  // Agrupar los productos por categoría utilizando el hook personalizado
  const groupedProducts = useGroupedByCategory(products);
  // Hook para manejar la navegación programática
  const navigate = useNavigate();

  // Función para manejar el clic en una categoría y navegar a la vista de esa categoría
  const handleCategoryClick = useCallback((category) => {
    navigate(`/category/${category}`);
  }, [navigate]);

  // Seleccionar las primeras seis categorías para mostrar, memorizando el resultado
  const categories = useMemo(() => {
    return Object.keys(groupedProducts).slice(0, 6).map(key => ({
      name: key,
      data: groupedProducts[key]
    }));
  }, [groupedProducts]);

  // Mostrar mensaje de carga mientras los productos se están recuperando
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Card className="category-group-card">
      <Card.Body className="py-3">
        {/* Título impactante */}
        <h2 className="category-group-title">Descubre Nuestras Categorías</h2>

        <Row className="mx-n1">
          {/* Mapear cada categoría y renderizar un componente CategoryCard */}
          {categories.map((category, index) => (
            <Col
              xs={6}
              md={4}
              className="px-3 py-2 category-col"
              key={category.name}
            >
              <div
                className="category-card-wrapper"
                onClick={() => handleCategoryClick(category.name)}
              >
                <CategoryCard
                  category={category.name}
                  image="/img/category-default.png" // Puedes reemplazar con una lógica para asignar imágenes específicas
                />
              </div>
            </Col>
          ))}
        </Row>
      </Card.Body>
    </Card>
  );
};

// Memorización del componente para evitar re-renderizados innecesarios
export default React.memo(CategoryGroup);
