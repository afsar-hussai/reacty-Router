//loader for fetching API
export const githubData=async ()=>{
    const response=await fetch('https://api.github.com/users/afsar-hussai');
    return response.json();
  }
  