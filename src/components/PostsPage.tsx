
import React from 'react';
import { usePosts } from '../hooks/usePosts';
import { 
  Container, 
  Typography, 
  Grid, 
  Card, 
  CardContent, 
  CardHeader, 
  Pagination, 
  Box, 
  Alert, 
  CircularProgress,
  TextField,
  InputAdornment
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const PostsPage: React.FC = () => {
  const postsPerPage = 6;
  const { 
    filteredPosts, 
    loading, 
    error, 
    currentPage, 
    totalPages, 
    setCurrentPage, 
    searchTerm, 
    setSearchTerm 
  } = usePosts(postsPerPage);

  const currentPosts = filteredPosts.slice(
    (currentPage - 1) * postsPerPage,
    currentPage * postsPerPage
  );

  
  React.useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, setCurrentPage]);

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="60vh">
        <CircularProgress size={60} />
      </Box>
    );
  }

  if (error) {
    return <Alert severity="error" sx={{ m: 4 }}>{error}</Alert>;
  }

  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <Typography variant="h3" align="center" gutterBottom sx={{ mb: 4, color: '#e0e7ff' }}>
        Latest Posts
      </Typography>

      
      <Box sx={{ mb: 5, maxWidth: 500, mx: 'auto' }}>
        <TextField
          fullWidth
          placeholder="Search by title..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
          variant="outlined"
          sx={{
            backgroundColor: '#1f2937',
            '& .MuiOutlinedInput-root': {
              color: 'white',
              '& fieldset': { borderColor: '#4b5563' },
              '&:hover fieldset': { borderColor: '#8b5cf6' },
            }
          }}
        />
      </Box>

      <Grid container spacing={4}>
        {currentPosts.length > 0 ? (
          currentPosts.map((post) => (
            <Grid item xs={12} md={6} lg={4} key={post.id}>
              <Card 
                sx={{ 
                  height: '100%', 
                  backgroundColor: '#1f2937',
                  border: '1px solid #4b5563',
                  '&:hover': { transform: 'translateY(-8px)', transition: '0.3s' }
                }}
              >
                <CardHeader
                  title={`Post #${post.id}`}
                  subheader={`User ID: ${post.userId}`}
                  sx={{ color: '#c4b5fd' }}
                />
                <CardContent>
                  <Typography variant="h6" gutterBottom sx={{ color: 'white' }}>
                    {post.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
                    {post.body.length > 150 ? post.body.substring(0, 150) + '...' : post.body}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))
        ) : (
          <Typography align="center" sx={{ width: '100%', py: 8, color: '#9ca3af' }}>
            No posts found matching your search.
          </Typography>
        )}
      </Grid>

      
      {filteredPosts.length > 0 && (
        <Box display="flex" justifyContent="center" sx={{ mt: 6 }}>
          <Pagination
            count={totalPages}
            page={currentPage}
            onChange={(_, page) => setCurrentPage(page)}
            color="primary"
            size="large"
            sx={{
              '& .MuiPaginationItem-root': { color: '#d1d5db' },
              '& .Mui-selected': { backgroundColor: '#8b5cf6 !important', color: 'white' }
            }}
          />
        </Box>
      )}
    </Container>
  );
};

export default PostsPage;