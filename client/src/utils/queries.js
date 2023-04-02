// importing apollo client
import { gql } from "@apollo/client";

//exporting  data for me
export const GET_ME = gql`
	{
		me {
			_id
			username
			email
			bookCount
			savedBooks {
				bookId
				authors
				description
				title
				image
				link
			}
		}
	}
`;
