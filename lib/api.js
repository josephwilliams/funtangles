import axios from 'axios'

export const getUsers = async () => {
  const res = await axios({
    method: 'get',
    url: '/api/users',
  })
  return res?.data
}

export const getUserByUsername = async username => {
  const res = await axios.get(`/api/users/${username}`)
  return res?.data
}

export const createUser = async name => {
  const res = await axios({
    method: 'post',
    url: '/api/users',
    params: {
      name: name,
      versions: {},
    }
  })
  return res?.data
}

export const getOrSetUser = async name => {
  const user = await getUserByUsername(name)
  if (user) {
    console.log('Username already exists')
    return user
  } else {
    console.log('Creating user:', name)
    await createUser(name)
  }
}

export const createUserVersion = async (name, version) => {
  const res = await axios({
    method: 'post',
    url: `/api/users/${name}/versions`,
    data: {
      version: version.rectangles,
      title: version.title,
    }
  })
  return res?.data
}

// TODO
// export const deleteUserVersion = async version => {
//   const res = await axios({
//     method: 'DELETE',
//     url: `/api/users/${name}/versions`,
//     data: {
//     }
//   })
//   return res?.data
// }
